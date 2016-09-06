import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel(){
		return this.get('session').fetch().catch(function(){});
	},
	model(){

		let uid = this.get('session.currentUser').uid;
		 let user = this.store.findRecord('user',uid);
		 console.log(user.juguetes);
		 return user;
		// return this.store.findAll('user');

	}
});
