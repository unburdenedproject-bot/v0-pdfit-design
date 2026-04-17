#!/usr/bin/env python
"""Fix missing Spanish diacritical marks in ES files.

Strategy: For each word, only replace when NOT adjacent to hyphens or slashes
(which indicate URL slugs like /es/extraccion-de-tablas/).
Uses negative lookbehind/lookahead with regex.
"""
import os
import re
import sys

# All replacements: longer words first to avoid partial matches
# Format: (unaccented_lowercase, accented_lowercase)
REPLACEMENTS = [
    # Longest first within each category to prevent partial matches
    # -cion/-sion words
    ('personalizacion', 'personalizaci\u00f3n'),
    ('identificacion', 'identificaci\u00f3n'),
    ('automatizacion', 'automatizaci\u00f3n'),
    ('digitalizacion', 'digitalizaci\u00f3n'),
    ('administracion', 'administraci\u00f3n'),
    ('automaticamente', 'autom\u00e1ticamente'),
    ('especificamente', 'espec\u00edficamente'),
    ('clasificacion', 'clasificaci\u00f3n'),
    ('visualizacion', 'visualizaci\u00f3n'),
    ('actualizacion', 'actualizaci\u00f3n'),
    ('configuracion', 'configuraci\u00f3n'),
    ('documentacion', 'documentaci\u00f3n'),
    ('comunicacion', 'comunicaci\u00f3n'),
    ('contratacion', 'contrataci\u00f3n'),
    ('optimizacion', 'optimizaci\u00f3n'),
    ('manipulacion', 'manipulaci\u00f3n'),
    ('recomendacion', 'recomendaci\u00f3n'),
    ('informacion', 'informaci\u00f3n'),
    ('verificacion', 'verificaci\u00f3n'),
    ('modificacion', 'modificaci\u00f3n'),
    ('distribucion', 'distribuci\u00f3n'),
    ('calibracion', 'calibraci\u00f3n'),
    ('presentacion', 'presentaci\u00f3n'),
    ('organizacion', 'organizaci\u00f3n'),
    ('interaccion', 'interacci\u00f3n'),
    ('instalacion', 'instalaci\u00f3n'),
    ('restriccion', 'restricci\u00f3n'),
    ('facturacion', 'facturaci\u00f3n'),
    ('preparacion', 'preparaci\u00f3n'),
    ('combinacion', 'combinaci\u00f3n'),
    ('suscripcion', 'suscripci\u00f3n'),
    ('descripcion', 'descripci\u00f3n'),
    ('publicacion', 'publicaci\u00f3n'),
    ('exportacion', 'exportaci\u00f3n'),
    ('importacion', 'importaci\u00f3n'),
    ('aplicacion', 'aplicaci\u00f3n'),
    ('validacion', 'validaci\u00f3n'),
    ('eliminacion', 'eliminaci\u00f3n'),
    ('navegacion', 'navegaci\u00f3n'),
    ('orientacion', 'orientaci\u00f3n'),
    ('paginacion', 'paginaci\u00f3n'),
    ('extraccion', 'extracci\u00f3n'),
    ('proteccion', 'protecci\u00f3n'),
    ('separacion', 'separaci\u00f3n'),
    ('comparacion', 'comparaci\u00f3n'),
    ('animacion', 'animaci\u00f3n'),
    ('educacion', 'educaci\u00f3n'),
    ('cotizacion', 'cotizaci\u00f3n'),
    ('compresion', 'compresi\u00f3n'),
    ('resolucion', 'resoluci\u00f3n'),
    ('traduccion', 'traducci\u00f3n'),
    ('deteccion', 'detecci\u00f3n'),
    ('seleccion', 'selecci\u00f3n'),
    ('impresion', 'impresi\u00f3n'),
    ('insercion', 'inserci\u00f3n'),
    ('numeracion', 'numeraci\u00f3n'),
    ('redaccion', 'redacci\u00f3n'),
    ('conversion', 'conversi\u00f3n'),
    ('reduccion', 'reducci\u00f3n'),
    ('produccion', 'producci\u00f3n'),
    ('conexion', 'conexi\u00f3n'),
    ('operacion', 'operaci\u00f3n'),
    ('situacion', 'situaci\u00f3n'),
    ('coleccion', 'colecci\u00f3n'),
    ('expresion', 'expresi\u00f3n'),
    ('creacion', 'creaci\u00f3n'),
    ('rotacion', 'rotaci\u00f3n'),
    ('posicion', 'posici\u00f3n'),
    ('relacion', 'relaci\u00f3n'),
    ('solucion', 'soluci\u00f3n'),
    ('division', 'divisi\u00f3n'),
    ('investigacion', 'investigaci\u00f3n'),
    ('encriptacion', 'encriptaci\u00f3n'),
    ('generacion', 'generaci\u00f3n'),
    ('direccion', 'direcci\u00f3n'),
    ('correccion', 'correcci\u00f3n'),
    ('precision', 'precisi\u00f3n'),
    ('funcion', 'funci\u00f3n'),
    ('edicion', 'edici\u00f3n'),
    ('seccion', 'secci\u00f3n'),
    ('opcion', 'opci\u00f3n'),
    ('sesion', 'sesi\u00f3n'),
    # n-tilde words (longest first)
    ('contrasenas', 'contrase\u00f1as'),
    ('contrasena', 'contrase\u00f1a'),
    ('disenados', 'dise\u00f1ados'),
    ('disenado', 'dise\u00f1ado'),
    ('disenada', 'dise\u00f1ada'),
    ('ensenanza', 'ense\u00f1anza'),
    ('pequenas', 'peque\u00f1as'),
    ('pequenos', 'peque\u00f1os'),
    ('pequena', 'peque\u00f1a'),
    ('pequeno', 'peque\u00f1o'),
    ('tamanos', 'tama\u00f1os'),
    ('disenos', 'dise\u00f1os'),
    ('espanol', 'espa\u00f1ol'),
    ('tamano', 'tama\u00f1o'),
    ('diseno', 'dise\u00f1o'),
    # Accent nouns (longest first)
    ('electronicas', 'electr\u00f3nicas'),
    ('electronicos', 'electr\u00f3nicos'),
    ('electronica', 'electr\u00f3nica'),
    ('electronico', 'electr\u00f3nico'),
    ('multifuncion', 'multifunci\u00f3n'),
    ('estadisticas', 'estad\u00edsticas'),
    ('estadistica', 'estad\u00edstica'),
    ('fotografias', 'fotograf\u00edas'),
    ('fotografica', 'fotogr\u00e1fica'),
    ('multiples', 'm\u00faltiples'),
    ('estaticas', 'est\u00e1ticas'),
    ('estatica', 'est\u00e1tica'),
    ('dificiles', 'dif\u00edciles'),
    ('dificil', 'dif\u00edcil'),
    ('telefonos', 'tel\u00e9fonos'),
    ('telefono', 'tel\u00e9fono'),
    ('escaner', 'esc\u00e1ner'),
    ('escaneres', 'esc\u00e1neres'),
    ('angulos', '\u00e1ngulos'),
    ('angulo', '\u00e1ngulo'),
    ('estandar', 'est\u00e1ndar'),
    ('analisis', 'an\u00e1lisis'),
    ('calculos', 'c\u00e1lculos'),
    ('calculo', 'c\u00e1lculo'),
    ('trafico', 'tr\u00e1fico'),
    ('mayoria', 'mayor\u00eda'),
    ('podria', 'podr\u00eda'),
    ('podrian', 'podr\u00edan'),
    ('haria', 'har\u00eda'),
    ('seria', 'ser\u00eda'),
    ('tendria', 'tendr\u00eda'),
    ('deberia', 'deber\u00eda'),
    ('comun', 'com\u00fan'),
    ('comunes', 'comunes'),
    ('rapidamente', 'r\u00e1pidamente'),
    ('facilmente', 'f\u00e1cilmente'),
    ('curriculum', 'curr\u00edculum'),
    ('especificos', 'espec\u00edficos'),
    ('especificas', 'espec\u00edficas'),
    ('especifico', 'espec\u00edfico'),
    ('especifica', 'espec\u00edfica'),
    ('automaticos', 'autom\u00e1ticos'),
    ('automaticas', 'autom\u00e1ticas'),
    ('automatico', 'autom\u00e1tico'),
    ('automatica', 'autom\u00e1tica'),
    ('imagenes', 'im\u00e1genes'),
    ('politicas', 'pol\u00edticas'),
    ('practicas', 'pr\u00e1cticas'),
    ('terminos', 't\u00e9rminos'),
    ('paginas', 'p\u00e1ginas'),
    ('politica', 'pol\u00edtica'),
    ('practica', 'pr\u00e1ctica'),
    ('practico', 'pr\u00e1ctico'),
    ('titulos', 't\u00edtulos'),
    ('numeros', 'n\u00fameros'),
    ('limites', 'l\u00edmites'),
    ('codigos', 'c\u00f3digos'),
    ('faciles', 'f\u00e1ciles'),
    ('indices', '\u00edndices'),
    ('rapidos', 'r\u00e1pidos'),
    ('rapidas', 'r\u00e1pidas'),
    ('basicos', 'b\u00e1sicos'),
    ('tecnicas', 't\u00e9cnicas'),
    ('tecnicos', 't\u00e9cnicos'),
    ('ultimos', '\u00faltimos'),
    ('periodos', 'per\u00edodos'),
    ('metodos', 'm\u00e9todos'),
    ('graficos', 'gr\u00e1ficos'),
    ('graficas', 'gr\u00e1ficas'),
    ('publicos', 'p\u00fablicos'),
    ('medicos', 'm\u00e9dicos'),
    ('juridicos', 'jur\u00eddicos'),
    ('utiles', '\u00fatiles'),
    ('capitulos', 'cap\u00edtulos'),
    ('articulos', 'art\u00edculos'),
    ('propositos', 'prop\u00f3sitos'),
    ('pagina', 'p\u00e1gina'),
    ('titulo', 't\u00edtulo'),
    ('numero', 'n\u00famero'),
    ('limite', 'l\u00edmite'),
    ('codigo', 'c\u00f3digo'),
    ('indice', '\u00edndice'),
    ('lineas', 'l\u00edneas'),
    ('rapido', 'r\u00e1pido'),
    ('rapida', 'r\u00e1pida'),
    ('unicos', '\u00fanicos'),
    ('basica', 'b\u00e1sica'),
    ('basico', 'b\u00e1sico'),
    ('tecnica', 't\u00e9cnica'),
    ('tecnico', 't\u00e9cnico'),
    ('optimo', '\u00f3ptimo'),
    ('optima', '\u00f3ptima'),
    ('tipico', 't\u00edpico'),
    ('tipica', 't\u00edpica'),
    ('ultimo', '\u00faltimo'),
    ('ultima', '\u00faltima'),
    ('periodo', 'per\u00edodo'),
    ('metodo', 'm\u00e9todo'),
    ('grafico', 'gr\u00e1fico'),
    ('grafica', 'gr\u00e1fica'),
    ('publico', 'p\u00fablico'),
    ('publica', 'p\u00fablica'),
    ('critico', 'cr\u00edtico'),
    ('critica', 'cr\u00edtica'),
    ('clasico', 'cl\u00e1sico'),
    ('clasica', 'cl\u00e1sica'),
    ('logico', 'l\u00f3gico'),
    ('logica', 'l\u00f3gica'),
    ('dinamico', 'din\u00e1mico'),
    ('dinamica', 'din\u00e1mica'),
    ('estatico', 'est\u00e1tico'),
    ('medico', 'm\u00e9dico'),
    ('juridico', 'jur\u00eddico'),
    ('invalido', 'inv\u00e1lido'),
    ('invalida', 'inv\u00e1lida'),
    ('capitulo', 'cap\u00edtulo'),
    ('articulo', 'art\u00edculo'),
    ('proposito', 'prop\u00f3sito'),
    ('linea', 'l\u00ednea'),
    ('minimo', 'm\u00ednimo'),
    ('minima', 'm\u00ednima'),
    ('maximo', 'm\u00e1ximo'),
    ('maxima', 'm\u00e1xima'),
    ('facil', 'f\u00e1cil'),
    ('unico', '\u00fanico'),
    ('unica', '\u00fanica'),
    ('valido', 'v\u00e1lido'),
    ('valida', 'v\u00e1lida'),
    ('util', '\u00fatil'),
    # Adverbs and misc
    ('tambien', 'tambi\u00e9n'),
    ('busquedas', 'b\u00fasquedas'),
    ('busqueda', 'b\u00fasqueda'),
    ('demas', 'dem\u00e1s'),
    ('detras', 'detr\u00e1s'),
    # Verbs
    ('procesaran', 'procesar\u00e1n'),
    ('encontrara', 'encontrar\u00e1'),
    ('mantendra', 'mantendr\u00e1'),
    ('permitira', 'permitir\u00e1'),
    ('recibiran', 'recibir\u00e1n'),
    ('funcionara', 'funcionar\u00e1'),
    ('necesitara', 'necesitar\u00e1'),
    ('activara', 'activar\u00e1'),
    ('recibira', 'recibir\u00e1'),
    ('procesara', 'procesar\u00e1'),
    ('tendran', 'tendr\u00e1n'),
    ('tendra', 'tendr\u00e1'),
    ('debera', 'deber\u00e1'),
    ('podran', 'podr\u00e1n'),
    ('despues', 'despu\u00e9s'),
    ('podra', 'podr\u00e1'),
    ('seran', 'ser\u00e1n'),
    ('estan', 'est\u00e1n'),
    # Nationalities
    ('portugues', 'portugu\u00e9s'),
    ('holandes', 'holand\u00e9s'),
    ('japones', 'japon\u00e9s'),
    ('frances', 'franc\u00e9s'),
    ('ingles', 'ingl\u00e9s'),
    ('aleman', 'alem\u00e1n'),
    ('arabe', '\u00e1rabe'),
]

# Words that need \w boundaries (short words prone to false matches)
WORD_BOUNDARY_REPLACEMENTS = [
    ('anos', 'a\u00f1os'),
    ('ano', 'a\u00f1o'),
    ('dias', 'd\u00edas'),
    ('dia', 'd\u00eda'),
    ('aqui', 'aqu\u00ed'),
    ('asi', 'as\u00ed'),
    ('mas', 'm\u00e1s'),
]

def build_pattern(word, strict_boundaries=False, case_sensitive=False):
    """Build regex pattern that won't match inside URL slugs or longer words.

    Uses \\b for word boundaries PLUS negative lookaround for hyphens/slashes.
    This ensures:
    - 'funcion' won't match inside 'funcionan' or 'funciona' (\\b handles this)
    - 'funcion' won't match inside 'extraccion-de-tablas' (hyphen check)
    - 'linea' won't match inside 'linear' (\\b handles this)
    """
    flags = 0 if case_sensitive else re.IGNORECASE
    if strict_boundaries:
        # For short words: require non-word chars on both sides, plus no hyphens/slashes
        return re.compile(r'(?<![/\-\w])' + re.escape(word) + r'(?![/\-\w])', flags)
    else:
        # For normal words: word boundary + no adjacent hyphens or slashes
        return re.compile(r'(?<![/\-])(?<!\w)' + re.escape(word) + r'(?!\w)(?![/\-])', flags)

# Pre-compile all patterns
compiled_replacements = []
for word, replacement in REPLACEMENTS:
    pattern = build_pattern(word, strict_boundaries=False)
    compiled_replacements.append((pattern, replacement, word))

compiled_word_boundary = []
for word, replacement in WORD_BOUNDARY_REPLACEMENTS:
    # For short words like 'mas', 'asi', 'ano', 'dia' - case sensitive (lowercase only)
    pattern = build_pattern(word, strict_boundaries=True, case_sensitive=True)
    compiled_word_boundary.append((pattern, replacement, word))

def process_file(filepath):
    """Process a single file, returning (changed, fix_count)."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except (UnicodeDecodeError, FileNotFoundError):
        return False, 0

    original = content
    fix_count = 0

    for pattern, replacement, word in compiled_replacements:
        new_content = pattern.sub(lambda m: match_case(m.group(), replacement), content)
        if new_content != content:
            # Count actual replacements
            fix_count += len(pattern.findall(content))
            content = new_content

    for pattern, replacement, word in compiled_word_boundary:
        new_content = pattern.sub(lambda m: match_case(m.group(), replacement), content)
        if new_content != content:
            fix_count += len(pattern.findall(content))
            content = new_content

    if content != original:
        with open(filepath, 'w', encoding='utf-8', newline='\n') as f:
            f.write(content)
        return True, fix_count
    return False, 0

def match_case(original, replacement):
    """Preserve the case pattern of the original word."""
    if original.isupper():
        return replacement.upper()
    elif original[0].isupper():
        return replacement[0].upper() + replacement[1:]
    return replacement

# Main
project_dir = os.path.dirname(os.path.abspath(__file__))
total_files_changed = 0
total_fixes = 0
files_checked = 0
changed_files = []

# Collect all files to process
all_files = []

# ES app pages
for root, dirs, files in os.walk(os.path.join(project_dir, 'app', 'es')):
    dirs[:] = [d for d in dirs if d not in ('.next', 'node_modules')]
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            all_files.append(os.path.join(root, f))

# Components
for root, dirs, files in os.walk(os.path.join(project_dir, 'components')):
    dirs[:] = [d for d in dirs if d not in ('.next', 'node_modules')]
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            all_files.append(os.path.join(root, f))

# Specific extra files
extras = [
    'lib/dashboard-tool-catalog.ts',
    'lib/route-map.ts',
    'app/sitemap-data.ts',
    'PDF.it-Guia-de-Marca.html',
]
for extra in extras:
    fp = os.path.join(project_dir, extra)
    if os.path.exists(fp):
        all_files.append(fp)

print(f"Processing {len(all_files)} files...")

for filepath in sorted(all_files):
    files_checked += 1
    changed, fixes = process_file(filepath)
    if changed:
        total_files_changed += 1
        total_fixes += fixes
        rel = os.path.relpath(filepath, project_dir)
        changed_files.append((rel, fixes))
        if fixes > 5:
            print(f"  {rel}: {fixes} fixes")

print(f"\n=== SUMMARY ===")
print(f"Files checked: {files_checked}")
print(f"Files changed: {total_files_changed}")
print(f"Total fixes: {total_fixes}")
print(f"\nTop 20 most-changed files:")
for f, c in sorted(changed_files, key=lambda x: -x[1])[:20]:
    print(f"  {c:4d}  {f}")
