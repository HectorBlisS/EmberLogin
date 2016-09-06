import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		guardar(){

			let model = this.get('model');

			let uid = this.get('session.currentUser').uid;

			this.store.findRecord('user',uid)
			.then(function(user){
				model.set('usuario',user);
				model.save();
			});


			this.transitionToRoute('index');
		}
	}
});
