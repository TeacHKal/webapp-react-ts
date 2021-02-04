declare module 'ChatAppTypes' {
    export type User = {
        photoURL: string,
    }

    export type Message = {
        uid: string,
        photoURL: string,
        createdAt: string,
        text: string
    }

    export type currentUser = {
        uid: string,
    }

    export type Auth  = {
        uid: string,
        photoURL: string,
        createdAt: string,
        currentUser: currentUser
        user: User
    }


}