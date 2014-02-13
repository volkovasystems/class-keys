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
		this.initialize( entity );
		this.construct( );
	}else{
		return new Keys( entity );
	}
};

Keys.prototype.initialize = function initialize( entity ){
	this.entity = entity;
};

Keys.prototype.construct = function construct( ){

};

Keys.prototype.bindKeys = function  bindKeys( ){
	/*:
		@method-configuration:
			{
				"isPrivate": true
			}
		@end-method-configuration
	*/

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

Keys.prototype.getMappedKeys = function getMappedKeys( ){
	/*:
		@method-documentation:
			Returns all enumerable keys wrapped as Key objects.
		@end-method-documentation
	*/
	var enumerableKeys = this.getEnumerableKeys( );
	var mappedKeys = [ ];
	for( var index = 0; index < enumerableKeys.length; index++ ){
		mappedKeys.push( Key( this.entity, enumerableKeys[ index ] ) );
	}	
	this.mappedKeys = mappedKeys;
	return this.mappedKeys;
};

Keys.prototype.getMethodKeys = function getMethodKeys( ){

};

Keys.prototype.getPropertyKeys = function getPropertyKeys( ){

};