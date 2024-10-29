import { Button } from 'UI/Button/Button';
import { ListComponent } from './ItemsList.style';

interface ItemsListProps {
    items: Record<string, string>; // id - value
    onItemClicked: (id?: string) => void;
}

export default function ItemsList({ items, onItemClicked }: ItemsListProps) {
    return (
        <ListComponent>
            <Button title="+ Add new" variant={(v) => v.outline} onClick={onItemClicked} />
            {Object.keys(items).map((id) => (
                <Button
                    title={items[id]}
                    variant={(v) => v.link}
                    onClick={() => onItemClicked(id)}
                />
            ))}
        </ListComponent>
    );
}
