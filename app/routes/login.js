import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel(){
		let session = this.get('session');
		if (session.get('isAuthenticated')) {
  			return this.transitionTo('juguetes.lista'); // Already authenticated
		}
		return this.get('session').fetch().catch(function(){});

		},
	actions:{
		login(provider){

			let self = this;
			this.get('session').open('firebase',{provider:provider})
			.then(function(){

			let usuario = self.get('session.currentUser');
			self.store.createRecord('user',{
				displayName:usuario.displayName,
				email:usuario.email,
				photoURL:usuario.photoURL,
				id:usuario.uid
			}).save();
			
			}); //aqui termina la promesa



			this.transitionTo('juguetes.lista');
		},
		logout(){
			this.get('session').close();
		},
		signIn(email, password){
			this.get('session').open('firebase',{
				provider:'password',
				email:email,
				password:password
			});
		}
	}
});
