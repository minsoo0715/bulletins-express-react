export {}

declare global {
    interface box {
        id: number,
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

    interface IndexPage_props {
        list:Array<box>,
        event:Function;
    }

}