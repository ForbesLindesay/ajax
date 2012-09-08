call component-build -s -v
call uglifyjs --no-copyright --output ajax.min.js -v --lift-vars build/build.js
pause