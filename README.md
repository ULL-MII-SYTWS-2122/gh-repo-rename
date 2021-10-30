# Instalation
```
gh extension install  ULL-MII-SYTWS-2122/gh-repo-rename 
```

# Usage
```
Usage: gh repo-rename [options] [organization/repository] [newRepositoriName]

Options:
    -v --version        output the version number
    -d --default        use a default name for a repository ('default-repository')
    -h --help           display help for command
```
* Ther isn't any option that is required

# Examples
An excecution example of default name:
```bash
    Repository name: ULL-MII-SYTWS-2122/prueba4

    gitpod /workspace/gh-repo-rename $ gh repo-rename -d  ULL-MII-SYTWS-2122/prueba4

    Repository name: ULL-MII-SYTWS-2122/default-repository
```

An excecution example of prueba4 name:
```bash
    Repository name: ULL-MII-SYTWS-2122/default-repository

    gitpod /workspace/gh-repo-rename $ gh repo-rename  ULL-MII-SYTWS-2122/default-repository prueba4

    Repository name: ULL-MII-SYTWS-2122/prueba4
```
