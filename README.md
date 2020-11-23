oclifvh
=======

### Development on Windows
Run command as follows:
```shell script
bin\run hello
```

---

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oclifvh
$ oclifvh COMMAND
running command...
$ oclifvh (-v|--version|version)
oclifvh/0.0.1 win32-x64 node-v12.16.1
$ oclifvh --help [COMMAND]
USAGE
  $ oclifvh COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclifvh gen`](#oclifvh-gen)
* [`oclifvh hello`](#oclifvh-hello)
* [`oclifvh help [COMMAND]`](#oclifvh-help-command)

## `oclifvh gen`

```
USAGE
  $ oclifvh gen

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/gen.js](https://github.com/themodernpk/oclifvh/blob/v0.0.1/src/commands/gen.js)_

## `oclifvh hello`

```
USAGE
  $ oclifvh hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/themodernpk/oclifvh/blob/v0.0.1/src/commands/hello.js)_

## `oclifvh help [COMMAND]`

```
USAGE
  $ oclifvh help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
