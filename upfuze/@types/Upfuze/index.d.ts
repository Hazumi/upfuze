declare global {
    namespace Upfuze {
        type ExampleModelId = string

        interface ExampleModelType {
            _id: ExampleModelId
            eventName: string
            startDate: Date
            endDate: Date
            registrationCost: string
            eventLocation: string
            websiteUrl: string
            description: string
            hours: number
            customInputs: Array<{
                label: string
                fieldName: string
                placeholder: string
                sortOrder: number
                inputType: 'textfield' | 'textarea' | 'switch' | 'checkboxes'
                options: {
                    required: boolean
                    timeSelect: boolean
                    radioValues: string[]
                    selectValues: string[]
                    checkboxValues: string[]
                    dateExpires: boolean
                }
            }>
        }
    }
}
