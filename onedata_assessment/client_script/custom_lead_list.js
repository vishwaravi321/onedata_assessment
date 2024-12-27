frappe.listview_settings["Lead"] = {
    onload: function (listview){
    if (frappe.boot.user.can_create.includes("Customer")) {
        listview.page.add_action_item(__("Create Customer"), function () {
            frappe.model.with_doctype("Customer", function () {
                let leads = listview.get_checked_items();
                frappe.xcall('onedata_assessment.server_script.lead.create_customer',{'leads' : leads}).then(r => {
                    frappe.set_route("List","Customer")
                })
            });
        });
    }
}
}