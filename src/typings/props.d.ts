export {}

declare global {
    interface box {
        id: number,
        title: string,
        content: string
    }

    interface boxlist {
        list: Array<box>,
        refresh: Function
    }

    interface smallbox_props {
        title: string,
        content: string,
        delete: Function,
        children?: React.ReactNode
    }

    interface inputbox_props {
         onSubmit:Function
    }

    interface IndexPage_props {
        list:Array<box>,
        event:Function,
        refresh:Function
    }

}