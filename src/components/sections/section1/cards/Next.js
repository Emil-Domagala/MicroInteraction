import Card from '../../../UI/Card';
import BottomButtons from './BottomButtons';

const Next = () => {
  return (
    <Card bgc={'bgc-black-brand'}>
      <div className="card-container">
        <a href="/" className="see-more-button"></a>
        <BottomButtons bgc="black" />
      </div>
    </Card>
  );
};
export default Next;
