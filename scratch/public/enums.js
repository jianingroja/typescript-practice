"use strict";
//relate keywords to a specific number
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["DIRECTOR"] = 2] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 3] = "PERSON";
})(ResourceType || (ResourceType = {}));
//
ResourceType.AUTHOR;
