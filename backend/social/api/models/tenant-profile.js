const { Model } = require("objection")
const UserProfile = require("./user-profile")

class TenantProfile extends Model {

  static get tableName() {
    return "Tenant_Profile"
  }
  static get idColumn() {
    return "tenant_id"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["tenant_name"],
      properties: {
        tenant_id: { type: "integer" },
        tenant_name: { type: "string" },
        city: { type: "string" },
        state: { type: "string" },
        country: { type: "string" },
        zip_code: { type: "string" },
        phone: { type: "string" },
        web_url: { type: "string" },
      },
    }
  }

  //Setting Relation with tenant_profile
  static get relationMappings() {
    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: UserProfile,
        join: {
          from: "Tenant_Profile.tenant_id",
          to: "User_Profile.tenant_id",
        },
      },
    }
  }
}

module.exports = TenantProfile