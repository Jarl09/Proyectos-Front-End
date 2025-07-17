@echo off
setlocal enabledelayedexpansion

REM Rutas
set PROYECTOS=%USERPROFILE%\Documents\Proyectos front-end
set BACKUP=%USERPROFILE%\Documents\Backups

REM Crear carpeta de backups si no existe
if not exist "%BACKUP%" mkdir "%BACKUP%"

REM Inicializar bandera
set CHANGES=0

REM Revisar si hay archivos modificados en los últimos 1 días por extensión
(for %%X in (html css js) do (
    forfiles /p "%PROYECTOS%" /s /m *.%%X /d -1 /c "cmd /c exit 0"
    if !errorlevel! equ 0 (
        set CHANGES=1
    )
))

REM Si hay cambios, hacer el backup
if %CHANGES%==1 (
    set FECHA=%DATE:~6,4%-%DATE:~3,2%-%DATE:~0,2%_%TIME:~0,2%%TIME:~3,2%
    set FECHA=%FECHA: =0%
    echo Cambios detectados. Creando backup...
    tar -czf "%BACKUP%\Proyectos-Front-End-%FECHA%.tar.gz" -C "%USERPROFILE%\Documents" "Proyectos front-end"
    echo Backup guardado en %BACKUP%
) else (
    echo No hay archivos modificados recientemente. No se hará backup.
)

pause
