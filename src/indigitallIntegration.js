import React from "react";
import {indigitall} from './sdk.min.js';

export  function IndigitallIntegrations() {
  function onNewUserRegistered(device){
    //User ID
    indigitall.logIn(device.deviceId, (device)=>{
    //DO SOMETHING
    }, (error)=>{
    //LOG ERROR
    })
  };

  function onIndigitallInitialized(permissions,device){
    window.alert("Indigitall intengrated \nDeviceId: " + device.deviceId)
  }

  function onLocationUpdated(location){}

  function onError(error){}

  function requestPushPermission(permission){}

  function requestLocationPermission(permission){}

  // Remember to replace with your appKey
  function onIndigitallLoaded(){
    indigitall.init({
      appKey:'94cb9c3e-0749-450f-8445-49bf2b269d8a',
      workerPath:'/worker.min.js',
      requestLocation: true,
      onInitialized: onIndigitallInitialized,
      requestPushPermission: requestPushPermission,
      onNewUserRegistered: onNewUserRegistered,
      requestLocationPermission: requestLocationPermission,
      onLocationUpdated: onLocationUpdated,
      onError: onError            
    })
  }
  return (
      <script src="sdk.min.js" onLoad={onIndigitallLoaded()} ></script>
  );
}