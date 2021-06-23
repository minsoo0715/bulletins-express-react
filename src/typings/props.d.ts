export {}

declare global {
    interface box {
        id: number,
        title: string,
        content: string
    }

    interface boxlist {
        list: Array<box>,
        refresh: Function,
        select: Function
    }

    interface smallbox_props {
        id: number,
        title: string,
        content: string,
        onClick:Function,
        delete: Function,
        children?: React.ReactNode
    }

    interface inputbox_props {
         onSubmit:Function
    }

    interface IndexPage_props {
        selectEvent:Function,
        list:Array<box>,
        event:Function,
        refresh:Function
    }

    interface viewPage_props {
        data:box,
        back:Function
    }

}