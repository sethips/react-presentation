<table>
    <?php $array = ['foo','bar']; ?>
    <?php foreach($array as $key=>$value): ?>
    <tr>
        <td><?php echo $key; ?></td>
        <td><?php echo $value; ?></td>
    </tr>
    <?php endforeach; ?>
</table>