<?php

namespace SilverStripeModule\Skeleton\Forms;

use SilverStripe\Forms\TextField;
use SilverStripe\View\Requirements;

class CreditCardField extends TextField
{
    /**
     * Add the necessary JavaScript and CSS bundles
     *
     * {@inheritdoc}
     */
    public function Field($properties = [])
    {
        Requirements::css('robbieaverill/silverstripe-module: client/dist/styles/bundle.css');
        Requirements::javascript('robbieaverill/silverstripe-module: client/dist/js/bundle.js');

        return parent::Field($properties);
    }

    /**
     * Adds the "schema" data in the attributes to render in the SilverStripe template. Used for non-React forms.
     *
     * {@inheritdoc}
     */
    public function getAttributes()
    {
        return array_merge(
            parent::getAttributes(),
            ['data-schema' => json_encode($this->getSchemaData())]
        );
    }

    /**
     * For non-React forms, add the value into the schema
     *
     * {@inheritdoc}
     */
    public function getSchemaDataDefaults()
    {
        return array_merge(
            parent::getSchemaDataDefaults(),
            ['value' => (string) $this->Value()]
        );
    }

    /**
     * Give a BEM-compatible class name when it's rendered in templates
     *
     * {@inheritdoc}
     */
    public function Type()
    {
        return 'credit-card-field';
    }
}
