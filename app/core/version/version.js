'use strict';

angular.module('recruitApp.version', [
  'recruitApp.version.interpolate-filter',
  'recruitApp.version.version-directive'
])

.value('version', '1.0);
