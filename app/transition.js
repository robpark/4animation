export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('splash'),
    this.use('fly-to')
  );
}
