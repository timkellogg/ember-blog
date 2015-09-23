import Ember from 'ember';

export default Ember.Component.extend({
	areControlsShowing: false,

	actions: {
		showControls() {
			this.set('areControlsShowing', true);
		},
		hideControls() {
			this.set('areControlsShowing', false);
		}
	}
});
