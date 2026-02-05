import Map "mo:core/Map";
import Blob "blob-storage/Storage";

module {
  type PersistentPartner = {
    name : Text;
    country : Text;
    description : Text;
    website : Text;
    logoPath : Text;
  };

  type PersistentSection = {
    title : Text;
    content : Text;
  };

  type PersistentContent = {
    headerImage : ?Blob.ExternalBlob;
    introduction : PersistentSection;
    objectives : PersistentSection;
    targetGroups : PersistentSection;
    partners : [PersistentPartner];
    socialMedia : [Text];
    contact : PersistentSection;
    footer : PersistentSection;
  };

  type OldActor = {
    persistentPartnersMap : Map.Map<Nat, PersistentPartner>;
    persistentImages : Map.Map<Text, Blob.ExternalBlob>;
    persistentContent : ?PersistentContent;
  };
  type NewActor = {};

  public func run(_old : OldActor) : NewActor { {} };
};
