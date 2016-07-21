<table>
    <?php $array = ['foo','bar']; ?>
    <?php foreach($array as $key=>$value): ?>
    <tr>
        <td><?php echo $key; ?></td>
        <td><?php echo $value; ?></td>
    </tr>
    <?php endforeach; ?>
</table>

<script>
  var rows = document.querySelectorAll('tr');
  for(var i = 0; i < rows.length; i++) {
      rows[i].addEventListener('click', function() { /** ... **/ });
  }
</script>