declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: false;
    };
    elId: {
        type: StringConstructor;
        required: false;
    };
    disableTimeSection: {
        type: BooleanConstructor;
        required: false;
    };
    show: {
        type: BooleanConstructor;
        required: false;
    };
    autoSelect: {
        type: BooleanConstructor;
        required: false;
    };
    confirmText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    props: {
        modelValue?: string;
        elId?: string;
        disableTimeSection?: boolean;
        show?: boolean;
        autoSelect?: boolean;
        confirmText: string;
        cancelText: string;
    };
    emit: {
        (e: 'update:modelValue', value: string): void;
        (e: 'close'): void;
    };
    localValue: import("vue").Ref<string>;
    onSubmit: () => void;
    onClose: () => void;
    pickerConfig: import("vue").ComputedRef<{
        inline: boolean;
        enableTime: boolean;
        dateFormat: string;
        time_24hr: boolean;
    }>;
    onLocalUpdate: (val: string) => void;
    PPModal: import("vue").DefineComponent<{
        title: {
            type: StringConstructor;
            required: false;
        };
        subtitle: {
            type: StringConstructor;
            required: false;
        };
        showCloseBtn: {
            type: BooleanConstructor;
            required: false;
        };
    }, {
        props: {
            title?: string;
            subtitle?: string;
            showCloseBtn?: boolean;
        };
        emit: (e: "close") => void;
        onClose: () => void;
        Close: (new () => import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, import("vue").ComponentOptionsBase<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}>, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>) & import("vue").ComponentOptionsBase<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}> & {
            props?: undefined;
        } & ThisType<import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, Record<string, any>, Readonly<{}>, import("vue").ComponentOptionsBase<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}>, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
        TransitionRoot: import("vue").DefineComponent<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            show: {
                type: BooleanConstructor[];
                default: null;
            };
            unmount: {
                type: BooleanConstructor[];
                default: boolean;
            };
            appear: {
                type: BooleanConstructor[];
                default: boolean;
            };
            enter: {
                type: StringConstructor[];
                default: string;
            };
            enterFrom: {
                type: StringConstructor[];
                default: string;
            };
            enterTo: {
                type: StringConstructor[];
                default: string;
            };
            entered: {
                type: StringConstructor[];
                default: string;
            };
            leave: {
                type: StringConstructor[];
                default: string;
            };
            leaveFrom: {
                type: StringConstructor[];
                default: string;
            };
            leaveTo: {
                type: StringConstructor[];
                default: string;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            beforeEnter: () => true;
            afterEnter: () => true;
            beforeLeave: () => true;
            afterLeave: () => true;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            show: {
                type: BooleanConstructor[];
                default: null;
            };
            unmount: {
                type: BooleanConstructor[];
                default: boolean;
            };
            appear: {
                type: BooleanConstructor[];
                default: boolean;
            };
            enter: {
                type: StringConstructor[];
                default: string;
            };
            enterFrom: {
                type: StringConstructor[];
                default: string;
            };
            enterTo: {
                type: StringConstructor[];
                default: string;
            };
            entered: {
                type: StringConstructor[];
                default: string;
            };
            leave: {
                type: StringConstructor[];
                default: string;
            };
            leaveFrom: {
                type: StringConstructor[];
                default: string;
            };
            leaveTo: {
                type: StringConstructor[];
                default: string;
            };
        }>> & {
            onBeforeEnter?: () => any;
            onAfterEnter?: () => any;
            onBeforeLeave?: () => any;
            onAfterLeave?: () => any;
        }, {
            as: string | Record<string, any>;
            unmount: boolean;
            show: boolean;
            appear: boolean;
            enter: string;
            enterFrom: string;
            enterTo: string;
            entered: string;
            leave: string;
            leaveFrom: string;
            leaveTo: string;
        }>;
        TransitionChild: import("vue").DefineComponent<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            show: {
                type: BooleanConstructor[];
                default: null;
            };
            unmount: {
                type: BooleanConstructor[];
                default: boolean;
            };
            appear: {
                type: BooleanConstructor[];
                default: boolean;
            };
            enter: {
                type: StringConstructor[];
                default: string;
            };
            enterFrom: {
                type: StringConstructor[];
                default: string;
            };
            enterTo: {
                type: StringConstructor[];
                default: string;
            };
            entered: {
                type: StringConstructor[];
                default: string;
            };
            leave: {
                type: StringConstructor[];
                default: string;
            };
            leaveFrom: {
                type: StringConstructor[];
                default: string;
            };
            leaveTo: {
                type: StringConstructor[];
                default: string;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            beforeEnter: () => true;
            afterEnter: () => true;
            beforeLeave: () => true;
            afterLeave: () => true;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            show: {
                type: BooleanConstructor[];
                default: null;
            };
            unmount: {
                type: BooleanConstructor[];
                default: boolean;
            };
            appear: {
                type: BooleanConstructor[];
                default: boolean;
            };
            enter: {
                type: StringConstructor[];
                default: string;
            };
            enterFrom: {
                type: StringConstructor[];
                default: string;
            };
            enterTo: {
                type: StringConstructor[];
                default: string;
            };
            entered: {
                type: StringConstructor[];
                default: string;
            };
            leave: {
                type: StringConstructor[];
                default: string;
            };
            leaveFrom: {
                type: StringConstructor[];
                default: string;
            };
            leaveTo: {
                type: StringConstructor[];
                default: string;
            };
        }>> & {
            onBeforeEnter?: () => any;
            onAfterEnter?: () => any;
            onBeforeLeave?: () => any;
            onAfterLeave?: () => any;
        }, {
            as: string | Record<string, any>;
            unmount: boolean;
            show: boolean;
            appear: boolean;
            enter: string;
            enterFrom: string;
            enterTo: string;
            entered: string;
            leave: string;
            leaveFrom: string;
            leaveTo: string;
        }>;
        Dialog: import("vue").DefineComponent<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            static: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmount: {
                type: BooleanConstructor;
                default: boolean;
            };
            open: {
                type: (BooleanConstructor | StringConstructor)[];
                default: string;
            };
            initialFocus: {
                type: import("vue").PropType<HTMLElement>;
                default: null;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            close: (_close: boolean) => true;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
            static: {
                type: BooleanConstructor;
                default: boolean;
            };
            unmount: {
                type: BooleanConstructor;
                default: boolean;
            };
            open: {
                type: (BooleanConstructor | StringConstructor)[];
                default: string;
            };
            initialFocus: {
                type: import("vue").PropType<HTMLElement>;
                default: null;
            };
        }>> & {
            onClose?: (_close: boolean) => any;
        }, {
            as: string | Record<string, any>;
            unmount: boolean;
            static: boolean;
            initialFocus: HTMLElement;
            open: string | boolean;
        }>;
        DialogOverlay: import("vue").DefineComponent<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
        }>>, {
            as: string | Record<string, any>;
        }>;
        DialogTitle: import("vue").DefineComponent<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            as: {
                type: (StringConstructor | ObjectConstructor)[];
                default: string;
            };
        }>>, {
            as: string | Record<string, any>;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        title: {
            type: StringConstructor;
            required: false;
        };
        subtitle: {
            type: StringConstructor;
            required: false;
        };
        showCloseBtn: {
            type: BooleanConstructor;
            required: false;
        };
    }>> & {
        onClose?: (...args: any[]) => any;
    }, {
        showCloseBtn: boolean;
    }>;
    FlatPickr: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "close")[], "update:modelValue" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: false;
    };
    elId: {
        type: StringConstructor;
        required: false;
    };
    disableTimeSection: {
        type: BooleanConstructor;
        required: false;
    };
    show: {
        type: BooleanConstructor;
        required: false;
    };
    autoSelect: {
        type: BooleanConstructor;
        required: false;
    };
    confirmText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
}, {
    autoSelect: boolean;
    disableTimeSection: boolean;
    show: boolean;
    confirmText: string;
    cancelText: string;
}>;
export default _sfc_main;
