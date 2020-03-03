/**
 * @author Nurali K
 * @description Date validator
 */
import { ValidatorFn, AbstractControl } from '@angular/forms';

export class DateValidators {

    /**
     * validate
     * @param dateField1 from date
     * @param dateField2  to date
     * @param validatorField error to throw
     * @description Generic function which accepts two dates to check if fromDate is greater than toDate
     */
    public static validate(dateField1: string, dateField2: string, validatorField: { [key: string]: boolean }): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            const date1 = c.get(dateField1).value;
            const date2 = c.get(dateField2).value;
            //TODO fix date validator
            if ((date1 !== null && date2 !== null) && (date1 !== '' && date2 !== '') && date1 > date2) {
                return validatorField;
            }
            return null;
        };
    }
}