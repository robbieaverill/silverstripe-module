<?php

namespace SilverStripeModule\Skeleton\Forms;

use SilverStripe\Forms\TextField;

class CreditCardField extends TextField
{
    protected $schemaComponent = 'CreditCardField';

    /**
     * For non-React forms, adds the "schema" data in the attributes to render in the SilverStripe template
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
