 
    <script>
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({ ecommerce: null });
    dataLayer.push({
      'event':'begin_datalayer', 'cov_gtm_id':"GTM-K7X94DG", 'cov_ga3_propety_id':"UA-189500139-1", 'cov_gads_id':"1439511599", 'cov_gads_conversion_id':"AW-11028898871", 'cov_gads_conversion_label':"-blGCOKa7IIYELfI_oop", 'cov_fb_pixel_id':"637402561401158", 'cov_microsoft_uetq_id':"343003931", 'cov_gtm_id':"ochib", 'cov_gtm_id':"2612831678022", 'cov_gtm_id':"12e1ec0a-90aa-4267-b1a0-182c455711e9", 'cov_gtm_id':"CBET743C77U5BM7P178N"
      });
    {% if first_time_accessed %}
    dataLayer.push({
    event: "purchase",
    ecommerce: {
        transaction_id: "{{ order.order_number }}",
        value: {{ total_price | times: 0.01 }},
        tax: {{ tax_price | times: 0.01 }},
        shipping: {{ shipping_price | times: 0.01 }},
        currency: "{{ order.currency }}",
        items: [
        {% for line_item in line_items %}{
            item_id: "{{ line_item.product_id }}",
            item_name: "{{ line_item.title | remove: "'" | remove: '"' }}",
            currency: "{{ order.currency }}",
            price: {{ line_item.final_price | times: 0.01 }},
            quantity: {{ line_item.quantity }}
        },{% endfor %}
    ]
    }
    });
    {% endif %}
    </script>
