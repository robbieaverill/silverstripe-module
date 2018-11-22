import Injector from 'lib/Injector';
import CreditCardField from 'components/CreditCardField';

export default () => {
    Injector.component.registerMany({
        // List your React components here so Injector is aware of them
        CreditCardField,
    });
};
