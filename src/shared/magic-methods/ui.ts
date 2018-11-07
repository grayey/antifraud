declare const $: any;


export const run = (tableTitle = '') => {
    $(document).ready(() => {
        $('#datatable').DataTable();

        const table = $('#datatable-buttons').DataTable({
            lengthChange: false,
            buttons: ['colvis',
                {
                    extend: 'excel',
                    title: () => {
                        return `Antifraud_${tableTitle.toLowerCase()}`;
                    }
                },
                {
                    extend: 'print',
                    title: () => {
                        return `Antifraud ${tableTitle}`;
                    }
                }
            ],
        });

        table.buttons().container()
            .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');
    });
};


export const triggerModalOrOverlay = (action: string, modalId: string) => {

    (action === 'open') ? $(`#${modalId}`).modal('show') : $(`#${modalId}`).modal('hide');
    // (action === "open") ? this.overlay.open(modalId, 'slideInLeft') : this.overlay.close(modalId, () => {
    // });

}


