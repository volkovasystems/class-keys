/*:
	@include:
		{
			"fs": "fs"
			"os-type": "osType",
			"work": "work",
			"class-key": "Key"
		}
	@end-include

	@module-documentation:

	@end-module-documentation

	@module-configuration:
		{
			"fileName": "class-keys.js",
			"moduleName": "classKeys",
			"className": "Keys",
			"authorName": "Richeve S. Bebedor",
			"isGlobal": true,
			"isClass": true
		}
	@end-module-configuration

	@export:
		{
		}
	@end-export
*/
Keys = function Keys( entity ){
	/*:
		@meta-configuration:
			{
				"entity": "object"
			}
		@end-meta-configuration
	*/
	if( this instanceof Key ){
		this.entity = entity;
	}else{
		return new Keys( entity );
	}
};

Keys.prototype.getAllKeyCount = function getAllKeyCount( ){
	/*:
		@method-documentation:
			Returns the current key count including non-enumerable keys.
		@end-method-documentation
	*/
	this.allKeyCount = this.getAllKeys( ).length;
	return this.allKeyCount;
};

Keys.prototype.getEnumerableKeyCount = function getEnumerableKeyCount( ){
	/*:
		@method-documentation:
			Returns the current key count excluding non-enumerable keys.
		@end-method-documentation
	*/
	this.enumerableKeyCount = this.getEnumerableKeys( ).length;
	return this.enumerableKeyCount;
}

Keys.prototype.hasKey = function hasKey( key ){

};

Keys.prototype.getAllKeys = function getAllKeys( ){
	/*:
		@method-documentation:
			Returns all the keys of the object including the non-enumerable keys.
		@end-method-documentation
	*/
	this.allKeys = Object.getOwnPropertyNames( this.entity );
	return this.allKeys;
};

Keys.prototype.getEnumerableKeys = function getEnumerableKeys( ){
	this.enumerableKeys = Object.keys( this.entity );
	return this.enumerableKeys;
};

Keys.prototype.getHiddenKeys = function getHiddenKeys( ){
	var enumerableKeys = this.getEnumerableKeys( );
	var allKeys = this.getAllKeys( );
};

Keys.prototype.getMethodKeys = function getMethodKeys( ){

};

Keys.prototype.getPropertyKeys = function getPropertyKeys( ){

};

Keys.prototype.getMappedKeys = function getMappedKeys( ){
	/*:
		@method-documentation:
			Returns all enumerable keys wrapped as Key objects.
		@end-method-documentation
	*/

};