export class AdminLogin {

    public static userPrevillages: Array<any> = [
        // 0th index
        {
            crm: [

                {
                    label: 'View All Inquiries', link: 'view_enquiry'
                },
                {
                    label: 'View All Loan Application', link: 'viewloanapp'
                },
                {
                    label: 'Sent Feedback', link: 'mail'
                }
            ],
            oe: [
                {
                    label: 'View All Inquiries', link: 'viewoeinquiries'
                },
                {

                    label: 'View Loan Application', link: 'viewoeloanapp'
                },
                {
                    label: 'Check Cibil Score', link: 'cibil'
                },
                {
                    label: 'Verify Documents', link: 'doc_verify'
                }
            ],
            cm: [
                {
                    label: 'View Loan Applications', link: 'viewcmloanapp'
                }
            ],
            ah:[
                {
                    label: 'View All Applications', link: 'viewahloanapp'
                }
            ]
        }

    ]
}
