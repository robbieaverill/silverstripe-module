<%-- Disable attributes that should be reserved for the actual field
       from rendering on the div, but
     add data-entwine so we can match against that. If you use a class,
     it can also be applied
     to the field holder and parts of the form field itself --%>
<div $getAttributesHTML('name', 'id', 'type', 'value') data-entwine></div>
