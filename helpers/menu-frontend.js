
const getMenuFrontEnd = (role = 'USER_ROLE') => {

    const menu = [
        {
          titulo: 'Jefatura',
          icono: 'mdi mdi-account',
          submenu: [
            { titulo: 'Reportes', url: '/' },
            { titulo: 'Metricas', url: 'grafica1' },

          ]
        },
    
        {
          titulo: 'Lideres',
          icono: 'mdi mdi-human-handsup',
          submenu: [
            { titulo: 'Metricas del equipo', url: 'rxjs' },
            { titulo: 'Enfoque de calidad', url: 'promesas' },
            { titulo: 'Programacion', url: 'progress' },
          ]
        },
        {
          titulo: 'Representantes',
          icono: 'mdi mdi-human-male-female',
          submenu: [
            // { titulo: 'Usuarios', url: 'usuarios' },
            { titulo: 'Metricas individuales', url: 'hospitales' },
            { titulo: 'Programacion', url: 'medicos' },
          ]
        },
      ];

    if ( role === 'ADMIN_ROLE' ) {
        menu[1].submenu.unshift({ titulo: 'Usuarios', url: 'usuarios' })
    }

    return menu;
}

module.exports = {
    getMenuFrontEnd
}
