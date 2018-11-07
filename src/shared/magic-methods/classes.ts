
import {SharedService} from '../../services/api-folder/setup-service';
import {AbstractControl} from '@angular/forms';

declare const $: any;


export class MagicClasses {

    constructor(public _setUP: SharedService) {
    }

    public loaders = {
        processing: false
    };

    public messages = {
        create: 'Save',
        update: 'Update'
    };

    public resetLoaderAndMessage() {
        this.loaders.processing = !this.loaders.processing;
        this.messages.create = (this.loaders.processing) ? 'Saving...' : 'Save';
        this.messages.update = (this.loaders.processing) ? 'Updating' : 'Update';
    }

    public setClass(statusName) {
        if (statusName) {
            switch (statusName.toLowerCase()) {
                case 'pending':
                    return 'badge-warning';
                case 'confirmed':
                    return 'badge-info';
                case 'fulfilled':
                    return 'badge-success';
                case 'partially fulfilled':
                    return 'badge-purple';
            }
        }
    }

    public setClassByNumber(enabled) {
        return (enabled) ? 'badge-success' : 'badge-warning';

    }

    public triggerModalOrOverlay(action: string, modalId: string, modalIsStatic?: string) {
        if (modalIsStatic) {
            $(`#${modalId}`).modal({
                backdrop: 'static',
                keyboard: false
            });
        }
        (action === 'open') ? $(`#${modalId}`).modal('show') : $(`#${modalId}`).modal('hide');
        // (action === "open") ? this.overlay.open(modalId, 'slideInLeft') : this.overlay.close(modalId, () => {
        // });
    }

    public selectWhereId(data: any[], key, id) {
        const dataItem: any[] = [];
        data.forEach(item => {
            const itemKey = parseInt(item[key], 10);
            const itemId = parseInt(id, 10);
            if (itemKey === itemId) {
                dataItem.push(item);
            }
        });
        return dataItem[0];
    }

    // public processEntity(entityObject, action, data?: any, entityId?){
    //     return this._setUP.processEntity(entityObject, action, data || null, entityId || null);
    // }

    public processErrors(error): string {
        let errorBody = '';
        const errors = error['error']['errors'];
        if (errors) {
            for (const key in errors) {
                errorBody += errors[key].toString() + '<br>';
            }
        } else if (error['message']) {
            errorBody = error['message'];
        }
        return errorBody;
    }

    public hasRequiredField(abstractControl: AbstractControl): boolean {
        if (abstractControl.validator) {
            const validator = abstractControl['validator']({}as AbstractControl);
            if (validator && validator.required) {
                return true;
            }
        }
        if (abstractControl['controls']) {
            for (const controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                    if (this.hasRequiredField(abstractControl['controls'][controlName])) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    public setValidationClass(formStatus) {
        return {
            'btn-primary': !formStatus,
            'btn-success': formStatus
        };
    }


}
