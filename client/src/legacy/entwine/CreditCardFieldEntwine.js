/* global window */
import React from 'react';
import ReactDOM from 'react-dom';
import { loadComponent } from 'lib/Injector';

window.jQuery.entwine('ss', ($) => {
  $('.js-injector-boot .credit-card-field[data-entwine]').entwine({
    onmatch() {
      const cmsContent = this.closest('.cms-content').attr('id');
      const context = (cmsContent)
        ? { context: cmsContent }
        : {};
      const CreditCardField = loadComponent('CreditCardField', context);
      const props = {
        ...this.data('schema'),
      };

      ReactDOM.render(
        <CreditCardField
          {...props}
        />,
        this[0]
      );
    },

    onunmatch() {
      ReactDOM.unmountComponentAtNode(this[0]);
    }
  });
});
