const contact_list_server = [
    {
        id: 1,
        name: 'pepe',
        last_connection: 'hoy 15:43',
        image: '',
        messages: [
            {
                id: 1,
                content: 'Hola!',
                author: 'YO',
                created_at: 'hoy 14:30',
                status: 'seen'
            },
            {
                id: 2,
                content: 'Que tal?',
                author: 'pepe',
                created_at: 'hoy 14:32',
                status: 'seen'
            },
            {
                id: 3,
                content: 'Que tal estuvo el partido?',
                author: 'YO',
                created_at: 'hoy 14:40',
                status: 'unseen'
            }
        ]
    },
    {
        id: 2,
        name: 'Marcos',
        last_connection: 'hoy 14:30',
        image: 'https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250',
        messages: [
            {
                id: 1,
                content: 'Hey qué tal? Hay que juntarnos! La semana que viene es mi cumple y estas invitada',
                author: 'Marcos',
                created_at: 'hoy 14:30',
                status: 'unseen'
            },
            {
                id: 2,
                content: 'Genial, Marcos, estoy!',
                author: 'YO',
                created_at: 'hoy 14:31',
                status: 'unseen'
            }
        ]
    },
    {
        id: 3,
        name: 'John Smith',
        last_connection: 'hoy 08:21',
        image: 'https://i.pinimg.com/736x/89/28/4b/89284b5c67cac49c7b0be588a335932a.jpg',
        messages: [
            {
                id: 1,
                content: 'Testeando... 1, 2, 3, probando',
                author: 'John Smith',
                created_at: 'hoy 08:21',
                status: 'unseen'
            },
            {
                id: 2,
                content: 'Probando 2',
                author: 'John Smith',
                created_at: 'hoy 08:22',
                status: 'unseen'
            },
            {
                id: 3,
                content: 'Probando 3',
                author: 'John Smith',
                created_at: 'hoy 08:23',
                status: 'unseen'
            }
        ]
    },
    {
        id: 4,
        name: 'Jane Doe',
        last_connection: 'hoy 12:15',
        image: 'https://i.pinimg.com/736x/1a/98/03/1a9803d93ff615ea7fbc198ba53401c5.jpg',
        messages: [
            {
                id: 1,
                content: 'Holaaaaaaa, tanto tiempo',
                author: 'Jane Doe',
                created_at: 'hoy 12:15',
                status: 'unseen'
            }
        ]
    },
    {
        id: 5,
        name: 'Samantha Lee',
        last_connection: 'hoy 09:35',
        image: 'https://i.pinimg.com/736x/b7/5f/d2/b75fd2fc1f8cbb7f65bb4f1a87dcc71e.jpg',
        messages: [
            {
                id: 1,
                content: 'Genial, Marcos, estoy!',
                author: 'Samantha Lee',
                created_at: 'hoy 09:35',
                status: 'seen'
            }
        ]
    }
]

export default contact_list_server
