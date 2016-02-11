'use strict';


juke.config(function($stateProvider){

	$stateProvider.state('newplaylist',{
		url:'/playlist/newform',
		templateUrl:'/js/playlist/templates/newplaylist.html',
		controller:'PlayListCtrl'
	})
	.state('playlist',{
		url:'/playlist/:playlistId',
		templateUrl:'/js/playlist/templates/playlist.html',
		controller:'PlayListCtrl',
		resolve: {
			playlist: function(PlayListFactory, $stateParams) {
				return PlayListFactory.fetchById($stateParams.playlistId);
			}
		}
	})

})