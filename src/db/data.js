const threads = [
    {
        id: 1,
        title: "Foro 1",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                id: 1,
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                id: 2,
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Foro 2",
        author: "Jose",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                id: 1,
                author: "Jack",
                date: Date.now(),
                content: "Hola mundo"
            },
            {
                id: 2,
                author: "Pedro",
                date: Date.now(),
                content: "Me llamo pedro"
            }
        ]
    }
]

export default threads;