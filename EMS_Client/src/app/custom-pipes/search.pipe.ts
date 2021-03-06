import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilter' })

export class SearchPipe implements PipeTransform {
    transform(value: any, args?: any): any {

        if (!value) return null;
        if (!args) return value;

        args = args.toLowerCase();

        return value.filter(function (item) {
            let newValues = JSON.stringify(item.name).toLowerCase().includes(args) ||
                JSON.stringify(item.contact_number).toLowerCase().includes(args) ||
                JSON.stringify(item.email).toLowerCase().includes(args);
            return newValues;
        });
    }
}
