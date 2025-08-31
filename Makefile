.PHONY: build

build:
	npm run build

check:
	npx prettier . --check

fmt-gitignore:
	sort --output .gitignore .gitignore
	awk "NF" .gitignore > .gitignore.temp && mv .gitignore.temp .gitignore

fmt:
	npx prettier . --write
	make fmt-gitignore

mr: fmt check test

run:
	npm run start

test:
	npm test -- --watchAll=false
