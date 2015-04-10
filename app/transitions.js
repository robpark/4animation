export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('splash'),
    this.use('explode', {
      pick: 'img',
      use: 'fly-to'
    }),
    this.reverse('explode', {
      pick: 'img',
      use: 'fly-to'
    })
  );
}
