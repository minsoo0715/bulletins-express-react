export {}

declare global {
    interface box {
        title: string,
        content: string
    }

    interface boxlist {
        list: Array<box>
    }

    interface smallbox_props {
        title: string,
        content: string,
        children?: React.ReactNode
    }

    interface inputbox_props {
         onSubmit:Function
    }

}