import { Button } from 'UI/Button/Button';
import { ListComponent } from './ItemsList.style';
import { Typography } from 'UI/Typography/Typography';
import { Colors } from 'environment/Colors';

interface ItemsListProps {
    items: Record<string, string>; // id - value
    selectedItem: string | undefined;
    onItemClicked: (id?: string) => void;
}

export default function ItemsList({ items, selectedItem, onItemClicked }: ItemsListProps) {
    return (
        <ListComponent>
            <Button
                title="+ Add new"
                variant={(v) => v.outline}
                onClick={() => onItemClicked()}
                marginOffset={{ bottom: 1 }}
            />
            {Object.keys(items).map((id) => (
                <Typography.Paragraph
                    key={id}
                    clickable
                    onClick={() => onItemClicked(id)}
                    color={id === selectedItem ? Colors.primary.hover : Colors.text.main}>
                    {items[id]}
                </Typography.Paragraph>
            ))}
        </ListComponent>
    );
}
