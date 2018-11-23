import Injector from 'lib/Injector';
import CreditCardField from 'components/CreditCardField';
import DescriptionTransformation from 'components/DescriptionTransformation';

export default () => {
  Injector.component.registerMany({
      // List your React components here so Injector is aware of them
      CreditCardField,
  });

  Injector.transform('my-transform', (updater) => {
    // Applies to all text fields in AssetAdmin editform that are called Description
    updater.component('TextField.AssetAdmin.*.Description', DescriptionTransformation);
  });
};
