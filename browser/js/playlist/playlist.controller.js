'use strict';

juke.controller('PlayListCtrl',function(playlist, PlayListFactory, $scope, $state, SongFactory){
	console.log(playlist);
	$scope.playlist = playlist;
	SongFactory.fetchAll()
	.then(function(allSongs) {
		$scope.songs = allSongs;
	})

	$scope.create = function(playlist) {
		PlayListFactory.createPlayList(playlist)
		.then(function(createdPlaylist) {
			$scope.playList.name ="";
			$state.go('playlist', {'playlistId': createdPlaylist._id})
		})
	}

	$scope.addSong = function(playlistId, song) {
		PlayListFactory.addSongToPlayList(playlistId,song)
		.then(function(addedSong){
	        //console.log(addedSong);
			$scope.playlist.songs.push(addedSong);
			$scope.song ="";
		})
	}



})
juke.controller('PlayListsCtrl',function(PlayListFactory, $scope){

	PlayListFactory.getAll()
	.then(function(allPlayLists) {
		$scope.playLists = allPlayLists;
	})



})