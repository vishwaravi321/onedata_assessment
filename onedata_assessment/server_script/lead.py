import frappe
import json

@frappe.whitelist()
def create_customer(leads):
    leads_data = json.loads(leads)
    for lead in leads_data:
        lead_name = frappe.db.get_value("Lead",lead['name'],"first_name")
        cus = frappe.new_doc("Customer")
        cus.customer_name = lead_name
        cus.save()
    frappe.db.commit()