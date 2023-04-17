let perfil = "" //administrador; asistente; invitado

switch (perfil) {
    case "administrador":
    case "ADMINISTRADOR": 
    case "Administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema")
        break;
    case "asistente": 
    case "ASISTENTE":
    case "Asistente":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos")
        break;
    case "invitado":
    case "INVITADO":
    case "Invitado":
        console.log("Usted sólo tiene permiso de consultar datos")
        break;
    case "" :
        console.log("Debe especificar el perfil del usuario")
        break;
    default:
        console.log("Debe especificar un perfil valido")
}