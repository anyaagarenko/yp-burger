.PHONY: build

build:
	npm run build

check:
	npx prettier . --check
	npx eslint src

fmt-gitignore:
	sort --output .gitignore .gitignore
	awk "NF" .gitignore > .gitignore.temp && mv .gitignore.temp .gitignore

fmt:
	npx prettier . --write
	npx eslint src --fix
	make fmt-gitignore

mr: fmt check test

run:
	npm run start

test:
	npm test -- --watchAll=false
